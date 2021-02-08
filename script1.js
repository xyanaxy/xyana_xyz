document.body.style.height = '500px';
document.body.addEventListener('click', function(e){
    var self = this,
        old_bg = this.style.background;

    this.style.background = this.style.background=='green'? 'blue':'green';
    setTimeout(function(){
        self.style.background = old_bg;
    }, 1000);
})