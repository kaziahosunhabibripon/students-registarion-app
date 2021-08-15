import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
    return (
        <div className="container">
            <nav>
                <Image src="/vercel.svg" width={50} height={48} alt="Super"/>
                <h1>Students Class Schedule</h1>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/subjects"><a>Subjects</a></Link></li>
                </ul>
            </nav>
            <div className="banner">
                <Image src="/students.jpg" width={966} height={276} alt="banner" />
            </div>
        </div>
    )
}
