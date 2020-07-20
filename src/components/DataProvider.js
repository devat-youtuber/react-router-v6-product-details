import React, {createContext, useState} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102
        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103
        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104
        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img5.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105
        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106
        }
    ])

    return (
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}
