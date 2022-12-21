<template>
    <div 
        @pointerdown="(event:any) => move.down(event)"
        @pointermove="(event:any) => move.move(event)"
        @pointerup="move.up()"
        @pointerout="move.out()"
        class="relative w-48 h-48 bg-white rounded">

    </div>
</template>

<script lang="ts" setup>

    const move = {
        is_down: false,
        offset: {x: 0, y: 0},
        mouse_position: {x: 0, y: 0},
        down: function (event:any) {
            console.log("bosildi")
            move.is_down = true;
            move.offset.x = event.target.offsetLeft - event.clientX;
            move.offset.y = event.target.offsetTop - event.clientY;
        },
        up: function () {
            console.log("qo'yib yuborildi")
            move.is_down = false;
            move.offset.x = 0;
            move.offset.y = 0;
            move.mouse_position.x = 0;
            move.mouse_position.y = 0;
        },
        out: function(){
            console.log("chiqib ketti")
            move.is_down = false;
            move.offset.x = 0;
            move.offset.y = 0;
            move.mouse_position.x = 0;
            move.mouse_position.y = 0;
        },
        move: function(event:any) {
            console.log("harakatda")
            event.preventDefault();
            if(move.is_down){
                move.mouse_position.x = event.clientX;
                move.mouse_position.y = event.clientY;
                event.target.style.left = (move.mouse_position.x + move.offset.x) + "px";
                event.target.style.top = (move.mouse_position.y + move.offset.y) + "px";
            }
        },
        test: function(event:any){
            console.log(event)
        }
    }

</script>