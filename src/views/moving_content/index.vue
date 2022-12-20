<template>
    <div 
        @mousedown="(enent:any) => move.mousedown(enent)"
        @mouseup="move.mouseup()"
        @mouseout="move.mouseup()"
        @mousemove="(enent:any) => move.mousemove(enent)"
        class="relative w-48 h-48 bg-white rounded">

    </div>
</template>

<script lang="ts" setup>

    const move = {
        is_down: false,
        offset: {x: 0, y: 0},
        mouse_position: {x: 0, y: 0},
        mousedown: function (event:any) {
            move.is_down = true;
            move.offset.x = event.target.offsetLeft - event.clientX;
            move.offset.y = event.target.offsetTop - event.clientY;
        },
        mouseup: function () {
            move.is_down = false;
            move.offset.x = 0;
            move.offset.y = 0;
            move.mouse_position.x = 0;
            move.mouse_position.y = 0;
        },
        mouseout: function(){
            move.is_down = false;
            move.offset.x = 0;
            move.offset.y = 0;
            move.mouse_position.x = 0;
            move.mouse_position.y = 0;
        },
        mousemove: function(event:any) {
            event.preventDefault();
            if(move.is_down){
                move.mouse_position.x = event.clientX;
                move.mouse_position.y = event.clientY;
                event.target.style.left = (move.mouse_position.x + move.offset.x) + "px";
                event.target.style.top = (move.mouse_position.y + move.offset.y) + "px";
            }
        },
    }

</script>