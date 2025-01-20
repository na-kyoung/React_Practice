// our-domain.com/[meetupId]

import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(){
    return (
        <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg/640px-Eiffel_Tower_from_the_Tour_Montparnasse%2C_1_May_2012_N2.jpg"
            title="A First Meetup"
            address="Some Street 5, Som City"
            description="The meetup description"
        />
    );
}

export default MeetupDetails;