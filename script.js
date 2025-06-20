let ukDOM = document.querySelector("#uk");
let matDOM = document.querySelector("#mat");
let istDOM = document.querySelector("#ist");
let chsubDOM = document.querySelector("#chsub");
let chnumDOM = document.querySelector("#chnum");
let button = document.querySelector("button");
let table = document.querySelector("table");
const ukrainianLanguage = {
  7: 100, 8: 105, 9: 110, 10: 115, 11: 120, 12: 125, 13: 131, 14: 134, 15: 136,
  16: 138, 17: 140, 18: 142, 19: 143, 20: 144, 21: 145, 22: 146, 23: 148, 24: 149,
  25: 150, 26: 152, 27: 154, 28: 156, 29: 157, 30: 159, 31: 160, 32: 162, 33: 163,
  34: 165, 35: 167, 36: 170, 37: 172, 38: 175, 39: 177, 40: 180, 41: 183, 42: 186,
  43: 191, 44: 195, 45: 200
};

const math = {
  5: 100, 6: 108, 7: 115, 8: 123, 9: 131, 10: 134, 11: 137, 12: 140, 13: 143,
  14: 145, 15: 147, 16: 148, 17: 149, 18: 150, 19: 151, 20: 152, 21: 155, 22: 159,
  23: 163, 24: 167, 25: 170, 26: 173, 27: 176, 28: 180, 29: 184, 30: 189, 31: 194,
  32: 200
};

const history = {
  8: 100, 9: 105, 10: 111, 11: 116, 12: 120, 13: 124, 14: 127, 15: 130, 16: 132,
  17: 134, 18: 136, 19: 138, 20: 140, 21: 141, 22: 142, 23: 143, 24: 144, 25: 145,
  26: 146, 27: 147, 28: 148, 29: 149, 30: 150, 31: 151, 32: 152, 33: 154, 34: 156,
  35: 158, 36: 160, 37: 163, 38: 166, 39: 168, 40: 169, 41: 170, 42: 172, 43: 173,
  44: 175, 45: 177, 46: 179, 47: 181, 48: 183, 49: 185, 50: 188, 51: 191, 52: 194,
  53: 197, 54: 200
};

const otherSubjects = {
  "lang": {
    5: 100, 6: 109, 7: 118, 8: 125, 9: 131, 10: 134, 11: 137, 12: 140, 13: 143,
    14: 145, 15: 147, 16: 148, 17: 149, 18: 150, 19: 151, 20: 152, 21: 153,
    22: 155, 23: 157, 24: 159, 25: 162, 26: 166, 27: 169, 28: 173, 29: 179,
    30: 185, 31: 191, 32: 200
  },
  "bio": {
    7: 100, 8: 107, 9: 114, 10: 119, 11: 124, 12: 128, 13: 131, 14: 134, 15: 136,
    16: 138, 17: 140, 18: 142, 19: 144, 20: 145, 21: 146, 22: 147, 23: 148,
    24: 149, 25: 150, 26: 151, 27: 152, 28: 154, 29: 156, 30: 158, 31: 160,
    32: 162, 33: 164, 34: 166, 35: 168, 36: 170, 37: 172, 38: 175, 39: 177,
    40: 179, 41: 182, 42: 185, 43: 188, 44: 192, 45: 196, 46: 200
  },
  "phys": {
    5: 100, 6: 109, 7: 118, 8: 125, 9: 131, 10: 134, 11: 137, 12: 140, 13: 143,
    14: 145, 15: 147, 16: 148, 17: 149, 18: 150, 19: 151, 20: 152, 21: 156,
    22: 160, 23: 164, 24: 166, 25: 169, 26: 173, 27: 176, 28: 179, 29: 184,
    30: 189, 31: 194, 32: 200
  },
  "chem": {
    6: 100, 7: 108, 8: 116, 9: 124, 10: 128, 11: 132, 12: 135, 13: 138, 14: 140,
    15: 142, 16: 143, 17: 144, 18: 146, 19: 147, 20: 148, 21: 149, 22: 150,
    23: 152, 24: 154, 25: 156, 26: 158, 27: 160, 28: 162, 29: 164, 30: 166,
    31: 168, 32: 170, 33: 172, 34: 175, 35: 178, 36: 182, 37: 186, 38: 190,
    39: 195, 40: 200
  },
  "geo": {
    7: 100, 8: 107, 9: 114, 10: 119, 11: 124, 12: 128, 13: 131, 14: 134, 15: 136,
    16: 138, 17: 140, 18: 142, 19: 144, 20: 145, 21: 146, 22: 147, 23: 148,
    24: 149, 25: 150, 26: 151, 27: 152, 28: 154, 29: 156, 30: 158, 31: 160,
    32: 162, 33: 164, 34: 166, 35: 168, 36: 170, 37: 172, 38: 175, 39: 177,
    40: 179, 41: 182, 42: 185, 43: 188, 44: 192, 45: 196, 46: 200
  },
  "uklit": {
    7: 100, 8: 105, 9: 110, 10: 115, 11: 120, 12: 125, 13: 131, 14: 134, 15: 136,
    16: 138, 17: 140, 18: 142, 19: 143, 20: 144, 21: 145, 22: 146, 23: 148,
    24: 149, 25: 150, 26: 152, 27: 154, 28: 156, 29: 157, 30: 159, 31: 160,
    32: 162, 33: 163, 34: 165, 35: 167, 36: 170, 37: 172, 38: 175, 39: 177,
    40: 180, 41: 183, 42: 186, 43: 191, 44: 195, 45: 200
  }
};


button.addEventListener("click", () => {
  let ukScore = ukDOM.value;
  let matScore = matDOM.value;
  let istScore = istDOM.value;
  let chScore = chnumDOM.value;
  let chSubName = chsubDOM.value;
  if (!ukScore || !matScore || !istScore || !chScore) {
    return alert("Write scores")
  }
  const selectedOption = chsubDOM.options[chsubDOM.selectedIndex];
  let uk200 = ukrainianLanguage[ukScore];
  if (uk200 == undefined) uk200 = "не склав"
  let mat200 = math[matScore];
  if (mat200 == undefined) mat200 = "не склав"
  let ist200 = history[istScore];
  if (ist200 == undefined) ist200 = "не склав"
  let other200 = otherSubjects[chSubName][chScore];
  if (other200 == undefined) other200 = "не склав"
  table.innerHTML = `
    <tr>
      <td>
        Subject
      </td>
      <td>
        Score (100-200)
      </td>
    </tr>
    <tr>
      <td>
        Українська мова
      </td>
      <td>
        ${uk200}
      </td>
    </tr>
    <tr>
      <td>
        Математика
      </td>
      <td>
        ${mat200}
      </td>
    </tr>
    <tr>
      <td>
        Історія України
      </td>
      <td>
        ${ist200}
      </td>
    </tr>
    <tr>
      <td>
        ${selectedOption.text}
      </td>
      <td>
        ${other200}
      </td>
    </tr>
  `
})
