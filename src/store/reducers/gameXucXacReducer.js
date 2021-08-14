import * as gameXucXacConstants from '../constants/gameXucXacConstants';

const initialState = {
  taiXiu: true, // true: tài (3 -> 11), false: xỉu (>= 12)
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
    { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
    { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
  ],
};

const gameXucXacReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case gameXucXacConstants.CHON_TAI_XIU:
      state.taiXiu = payload;

      return { ...state };
    case gameXucXacConstants.DAT_CUOC:
      const mangXucXacRandom = [];

      // Tăng tổng số bàn chơi 1 đơn vị mỗi khi bấm đặt cược
      state.soBanChoi += 1;

      // Random 3 con xúc xắc
      for (let i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;

        const xucXacNgauNhien = {
          diem: soNgauNhien,
          hinhAnh: `./images/gameXucXac/${soNgauNhien}.png`,
        };

        mangXucXacRandom.push(xucXacNgauNhien);
      }

      // Tính tổng điểm xúc xắc
      const tongDiemXucXac = mangXucXacRandom.reduce((tongDiem, xucXac) => {
        return tongDiem += xucXac.diem;
      }, 0);

      // Kiểm tra số bàn thắng
      if ((state.taiXiu && tongDiemXucXac <= 11) || (!state.taiXiu && tongDiemXucXac >= 12)) {
          state.soBanThang += 1;
      }

      return { ...state, mangXucXac: mangXucXacRandom };
    default:
      return state;
  }
};

export default gameXucXacReducer;
