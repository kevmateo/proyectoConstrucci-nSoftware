import AccionesService from '../services/acciones.service';
import AccionesModel from '../db/models/acciones.model';
import { AccionesCreationAttributesI, AccionesAtributesI } from "../../type";
import { sendMessageToClients } from '../websocket';
import WebSocket from 'ws';

const subscribedSymbols = new Set();

export const socket = new WebSocket('wss://ws.twelvedata.com/v1/quotes/price?apikey=2f8c9936a0ec4f6381a9cf6522e9f408');

socket.addEventListener('open', function (event) {
    AccionesModel.findAll().then((acciones: any) => {
        acciones.map((accion: any) => {
            subscribe(accion.siglas_accion);
        });
    });

});

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data as any);
    const receivedSymbol = data.symbol;

    AccionesService.getAcciones().then((acciones: any) => {
        acciones.map((accion: AccionesAtributesI) => {
            if (accion.siglas_accion === receivedSymbol) {
                accion.cambio = (data.price - accion.precio_compra) / accion.precio_compra;
                accion.ganancia_perdida = accion.costo_total * (1 + accion.cambio);
                //console.log(accion);
                AccionesService.updateAccion(accion.id_accion, accion).then((updatedAccion: any) => {
                    sendMessageToClients(updatedAccion);
                });
            }
        });
    });

});


export var subscribe = function (symbol: any) {
    if (!subscribedSymbols.has(symbol)) {
        socket.send(JSON.stringify({
            "action": 'subscribe',
            "params": {
                "symbols": `${symbol}`
            }
        }));
        console.log('Subscribed to ' + symbol);
        subscribedSymbols.add(symbol);
    } else {
        console.log('Already subscribed to ' + symbol);
    }

}
export var unsubscribe = function (symbol: any) {
    socket.send(JSON.stringify({
        "action": 'unsubscribe', "params": {
            "symbols": `${symbol}`
        }
    }));
    socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
}



