import Card from "./components/cards/card";
const App = ()=>{
    return <>
        <Card 
        backColor = 'orange'
        userInfo = {{
            name: 'jane Doe',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.',
            image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpXIOUnRKs1ID8FD0KNPt1AiOWx_KmJCdSHZHFSEAfH-FE0YMoDycS5so9Oi0J_-ckHg&usqp=CAU',
            level : '10',
            points : '2,256',
            groupName: 'group Name',
            joinedDate:'joined January 2019',
            Position:'Position/Role',
            City:'City, Country',
            awards:'2',
            matchs:'27',
            pals:'123',
            coffee:'∞'
        }}
        />
        <Card 
        backColor = 'green'
        userInfo = {{
            name: 'jane Doe',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.',
            image : 'https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000',
            level : '11',
            points : '2,256',
            groupName: 'group Name',
            joinedDate:'joined January 2019',
            Position:'Position/Role',
            City:'City, Country',
            awards:'2',
            matchs:'27',
            pals:'123',
            coffee:'∞'
        }}        
        />
    </>
}

export default App;