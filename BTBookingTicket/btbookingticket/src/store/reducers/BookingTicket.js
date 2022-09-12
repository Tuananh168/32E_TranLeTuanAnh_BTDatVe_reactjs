

const StateDefault = {
    DanhSachGheDat: []
}



export const BookingTicket = (state = StateDefault, { type, payload }) => {
    console.log("type", type);
    console.log("payload", payload);
    switch (type) {
        case "DAT_GHE": {
            const data = [...state.DanhSachGheDat];
            const index = data.findIndex(item => item.soGhe === payload.soGhe)
            if (index === -1) {
                data.push(payload)

            } else {
                data.splice(index, 1);
            }


            return { ...state, DanhSachGheDat: data }
        }
        case "HUY_GHE": {
            console.log("payload", payload)
            const data = [...state.DanhSachGheDat];
            const index = data.findIndex(item => item.soGhe === payload.soGhe)

            data.splice(index, 1);

            return { ...state, DanhSachGheDat: data }
        }


        default: return { ...state }
    }

}

export default BookingTicket;