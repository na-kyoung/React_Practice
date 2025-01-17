// our-domain.com/news
import Link from "next/link"; // SPA 구현

function NewsPage(){
    return (
        <>
            <h1>The NewsPage</h1>
            <ul>
                <li>
                    <Link href="/news/reactjs">ReactJS Is A Great Framework</Link>
                </li>
                <li>
                    <Link href="/news/nextjs">NextJS Is A Great Framework</Link>
                </li>
            </ul>
        </>
    );
}

export default NewsPage;