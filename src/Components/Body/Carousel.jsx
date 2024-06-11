import { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmIBgGZ73xbXDqqQ8EACfv8g8PUALiseWPf-lZ3Y33F1PGb3Q1FtzcWQpiZWd0ZfuyRA&usqp=CAU',
        alt: 'img-1'
    },
    {
        id: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCwNpEmkvJGFCezq1qpJqNX4xUynpoIL8bg&usqp=CAU',
        alt: 'img-2'
    },
    {
        id: 3,
        url: 'https://www.seasonedsprinkles.com/wp-content/uploads/2018/02/Nutella-Hot-Coffee-5.jpg.webp',
        alt: 'img-3'
    },
    {
        id: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCLvoGaUzslFgtbzJoNTsSQfts0jyRM_v9k7lgVJk8sTeXS3KN8_9eyqOTZio93tv8zE&usqp=CAU',
        alt: 'img-4'
    },
    {
        id: 5,
        url: 'https://cdn.pickuplimes.com/cache/0e/3a/0e3a9431b6af2aff54e97e573f58476c.jpg',
        alt: 'img-5'
    },
];

function Carousel() {
    const [activeImage, setActiveImage] = useState(0);

    const prevImage = () => {
        if (activeImage <= 0){
            setActiveImage(data.length - 1);
        }
        else{
            setActiveImage(activeImage - 1);
        }
        // setActiveImage((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            nextImage();
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, [activeImage])

    const nextImage = () => {
        setActiveImage((activeImage + 1) % data.length);

        // setActiveImage((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bg-orange-900 flex items-center justify-center p-6">
            <button onClick={prevImage} className="border-2 border-yellow-700 bg-amber-600 text-white rounded-lg p-1 font-bold font-serif mr-4">
                Prev
            </button>
            <div className='flex items-center h-80 w-640 m-6'>
                {data.map((item, index) => (
                    <img
                        key={item.id}
                        className={activeImage === index ? "block h-96 w-80 border-2 border-orange-800 p-1" : "hidden"}
                        src={item.url}
                        alt={item.alt}
                    />
                ))}
            </div>
            <button onClick={nextImage} className="border-2 border-yellow-700 bg-amber-600 text-white rounded-lg p-1 font-bold font-serif ml-4">
                Next
            </button>
        </div>
    );
}

export default Carousel;
