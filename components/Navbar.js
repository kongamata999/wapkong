import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <Link href="/">
                   <Image src="/จิ้งหรีด.jpg" width={70} height={70} alt="logo"/>
                </Link>
            </div>
            <Link href="/">หน้าแรก</Link>
            <Link href="/about">บรรยากาศภายในฟาร์ม</Link>
            <Link href="/products">สินค้าไก่ชน</Link>
        </nav>
    )
}