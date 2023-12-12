// Đoạn mã HTML không thay đổi

// Mã JS
const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

// Hàm để chọn ngẫu nhiên một câu trả lời từ mảng các câu trả lời
function getRandomAnswer() {
    return Math.floor(Math.random() * 4); // Số 4 tượng trưng cho số lượng câu trả lời
}

// Sự kiện khi click vào nút "Random Answer"
document.getElementById('btn').addEventListener('click', function() {
    quizes.forEach(quiz => {
        const randomAnswerIndex = getRandomAnswer();
        const answerItems = document.querySelectorAll(`input[name="${quiz.id}"]`);

        if (answerItems.length > 0) {
            answerItems[randomAnswerIndex].checked = true;
        }
    });
});
