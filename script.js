AFRAME.registerComponent("turtle", {
    init: function(){
        remain = 5
        this.el.addEventListener("collide", function(e) {
            e.detail.target.el.remove()
            remain -= 1
            document.getElementById("number").setAttribute("text", {value: String(remain)})
            if(remain==0){
                document.getElementById("message").setAttribute("text", {value: "You won !", width: "20"})
                document.getElementById("number").setAttribute("text", {value: ""})
            }
        })
    }
})