import {HttpClient, json} from 'aurelia-fetch-client';


export class rajakaardi_redigeerimine {
    attached() {
        this.init()
    }
    data={};
    colors = ['red', 'black','yellow','green','blue'];
    widths = ['1','3','5','7','9'];
    
    
    mousePressed = false;
    lastX;
    lastY;
    ctx;


    init() {
        var myCanvas = document.getElementById('myCanvas');
        console.log(myCanvas);
        this.ctx = document.getElementById('myCanvas').getContext("2d");
    }

    canvasMouseDown(e, el) {
        var de = document.documentElement;
        var box = e.target.getBoundingClientRect();
        var top = box.top + window.pageYOffset - de.clientTop;
        var left = box.left + window.pageXOffset - de.clientLeft;
        this.mousePressed = true;
        console.log(e.target);
        //this.draw(e.pageX - e.target.getClientRects()[0].left, e.pageY - e.target.getClientRects()[0].top, false);
        this.draw(e.pageX - left, e.pageY - top - 11, false);
    }

    canvasMouseLeave(e) {
        console.log("mouse leave");
        this.mousePressed = false;
    }

    canvasMouseUp(e) {
        this.mousePressed = false;
    }

    canvasMouseMove(e, el) {
        var de = document.documentElement;
        var box = e.target.getBoundingClientRect();
        var top = box.top + window.pageYOffset - de.clientTop;
        var left = box.left + window.pageXOffset - de.clientLeft;
        if (this.mousePressed) {
            //this.draw(e.pageX - e.target.getClientRects()[0].left, e.pageY - e.target.getClientRects()[0].top, true);
            this.draw(e.pageX - left, e.pageY - top - 11, true);
        }
    }


    draw(x, y, isDown) {
        if (isDown) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.data.color;
            this.ctx.lineWidth = this.data.width;
            this.ctx.lineJoin = "round";
            this.ctx.moveTo(this.lastX, this.lastY);
            this.ctx.lineTo(x, y);
            this.ctx.closePath();
            this.ctx.stroke();
        }
        this.lastX = x; this.lastY = y;
    }

    clearArea() {
        // Use the identity matrix while clearing the canvas
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    
    
}