// our-domain.com/news/[newsId]
import { useRouter } from "next/router";

function DetailPage(){
    const router = useRouter(); // 동적 라우팅

    const newsId = router.query.newsId;
    console.log(newsId);

    return (
        <h1>The DetailPage</h1>
    )
}

export default DetailPage;