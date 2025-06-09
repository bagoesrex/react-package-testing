import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import './EmblaCarouselReact.css'

export default function EmblaCarouselReact() {
    const [emblaRef] = useEmblaCarousel(
        { loop: false },
        [Autoplay({ delay: 2000 }), AutoScroll({ speed: 5 })]
    )

    const images = [
        'public/megu.jpeg',
        'public/megu.jpeg',
        'public/megu.jpeg',
    ]

    return (
        <div className="flex flex-col items-center">
            <h1 className="pb-10 font-extrabold font-sans">Embla Carousel React</h1>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container gap-2">
                    {images.map((src, index) => (
                        <div className="embla__slide" key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
