// our-domain.com/
import MeetupList from "@/components/meetups/MeetupList";
import { revalidatePath } from "next/cache";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg/640px-Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg',
        address: 'Some address 5, some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg/640px-Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg',
        address: 'Some address 10, some City',
        description: 'This is a second meetup!'
    }
];

function HomePage(props){
    return <MeetupList meetups={props.meetups}/>;
}

// # getStaticProps
// export async function getStaticProps(){
//   // fetch data from API
//   return {
//     props: {
//         meetups: DUMMY_MEETUPS
//     },
//     revalidate: 10 //10s
//   };
// }

// # getServerSideProps
export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    // fetch data from API

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}


export default HomePage;