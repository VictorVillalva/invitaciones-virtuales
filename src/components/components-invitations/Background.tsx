import bgImage from "@/assets/images/DanielaMedelXV/bg-blue-flowers.jpg"

export default function Background() {
    return (
        <div className="absolute inset-0 opacity-5 h-auto" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
    )
}
