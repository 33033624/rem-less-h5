function Dog(){
    this.wow=function(){
        console.log('wow');
    };
    this.yield=function(){
        console.log('haha');
    }
}
function xiaoXian(){
    var that = this;
    var timer=0;
    setInterval(function(){
        timer++;
        that.wow();
        if(timer==10){
            that.yield();
            timer=0;
        }

    },500)


}
xiaoXian.prototype=new Dog();
new xiaoXian();

