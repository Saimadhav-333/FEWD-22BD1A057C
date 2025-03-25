function Genimg({a,b}){
    let data = {
        1:"/images/one.jpg",
        2:"/images/two.jpg",
        3:"/images/three.jpg",
        4:"/images/four.jpg",
        5:"/images/five.jpg",
        6:"/images/six.jpg"
    }
    return(
        <div>
            <img src={data[a]}/>
            <img src={data[b]}/>
        </div>
    )
}

export default Genimg;