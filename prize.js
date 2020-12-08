class Prize {
    constructor(){
        this.title= "";
        this.desc="";
        this.imgURL="";
    }

    addPrize(_title, _desc, _imgURL){
        this.title= _title;
        this.desc= _desc;
        this.imgURL= _imgURL;
        return this;
    }
    
}