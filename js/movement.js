AFRAME.registerComponent("movement", {
    schema:{
        moveX:{type:"number",default:0},
        moveZ:{type:"number",default:-0.25},
        moveY:{type:"number",default:4},
        
    },
    tick:function(){

        window.addEventListener("keydown",(e) => {
            if(e.key === "d"){
            this.data.moveX=this.data.moveX+0.01;
        }

            if(e.key === "a"){
                this.data.moveX=this.data.moveX-0.01
            }

            if(e.key === "w"){
                this.data.moveZ=this.data.moveZ-0.01
            }

            if(e.key === "s"){
                this.data.moveZ=this.data.moveZ+0.01
            }

            if(e.key === "ArrowUp"){
                this.data.moveY=this.data.moveY+0.01
            }

            if(e.key === "ArrowDown"){
                this.data.moveY=this.data.moveY-0.01
            }
        })

        
        
        var pos = this.el.getAttribute("position");
        
        pos.x = this.data.moveX;
        pos.y = this.data.moveY;
        pos.z = this.data.moveZ
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    }
  });