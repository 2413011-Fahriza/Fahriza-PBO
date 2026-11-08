class book {
    title : string;
    pages : number;
    author : string;
    type : string;
    stock : number;

    constructor (title : string, pages : number, author : string, type : string, stock : number) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.type = type;
        this.stock = stock;
    }

    borrow () {
        if (this.stock === 0){
            throw new Error(`Sorry, "${this.title}" is out of stock.`);
        }
        this.stock--;
        console.log(
            `You Have Borrowed "${this.title}", Remaining Stock ${this.stock}`,
        )
    }

    return () {
        this.stock++;
        console.log(
            `You Have Returned "${this.title}", Remaining Stock ${this.stock}`,
        )
    }

}

    const novelBook = new book ("Laskar Pelangi", 529, "Andrea Hirata", "Novel", 5);
    const comiclBook = new book ("One Piece", 1000, "Elichiro Oda", "Comic", 10);

    novelBook.borrow()
    novelBook.return()