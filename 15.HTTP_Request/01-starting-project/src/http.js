// 장소 리스트 조회
export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places'); 
    const resData = await response.json();

    if(!response.ok){
      throw new Error('Failed to fetch places');
    }

    return resData.places;
}

// 선택한 장소 조회
export async function fetchUSerPlaces() {
    const response = await fetch('http://localhost:3000/user-places'); 
    const resData = await response.json();

    if(!response.ok){
      throw new Error('Failed to fetch user places');
    }

    return resData.places;
}

// 장소 선택 및 삭제
export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error('Failed to update user places');
    }

    return resData.message;
}