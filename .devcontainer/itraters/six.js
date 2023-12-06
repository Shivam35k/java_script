const coding = ["js", "ruby", "java", "pthon", "cpp"]


// const value = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);


 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=>{
//     num>4
// } )

// const newNums = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })


// console.log(newNums);



const books = [
    {tittle: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {tittle: 'Book Two', genre: 'NonFiction', publish: 1992, edition: 2008},
    {tittle: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {tittle: 'Book Four', genre: 'NonFiction', publish: 1989, edition: 2010},
    {tittle: 'Book Five', genre: 'Science', publish: 2009, edition: 2006},
    {tittle: 'Book Six', genre: 'Fiction', publish: 1987, edition: 1989},
    {tittle: 'Book Seven', genre: 'History', publish: 1986, edition: 2056},
    {tittle: 'Book Eight', genre: 'science', publish: 2011, edition: 2003},
    {tittle: 'Book Nine', genre: 'Fiction', publish: 1956, edition: 2022},
];

// const userBooks = books.filter((bk)=> bk.genre ==='History')

const userBooks = books.filter((bk)=> {
   return bk.publish>=1800 && bk.genre ==="History"
})
console.log(userBooks);