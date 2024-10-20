const membersData = JSON.parse(localStorage.getItem("membersData")) || [];

// 표에 회원 데이터 넣기
function appendMembersToTable(members) {
    const tableBody = document.querySelector("#memberTable tbody");
    tableBody.innerHTML = ''; // 기존 내용을 지워서 새로운 내용 들어갈 수 있게 비우기

    members.forEach(member => {
        const row = createMemberRow(member);
        tableBody.appendChild(row);
    });
}

// 회원 정보 들어가는 행 만들기
function createMemberRow(member) {
    const row = document.createElement("tr");
    row.setAttribute('data-id', member.id);

    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("data-id", member.id);
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);

    const memberInfo = [
        member.name,
        member.englishName,
        member.github,
        member.gender,
        member.role,
        member.firstWeekGroup,
        member.secondWeekGroup
    ];

    memberInfo.forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;

        if (index === 2) {
            cell.style.cursor = 'pointer';
            cell.style.textDecoration = 'underline';
            cell.addEventListener('click', () => {
                window.open(`https://github.com/${value}`, '_blank');
                
            });
        }

        row.appendChild(cell);
    });

    return row;
}

function loadMembers() {
    appendMembersToTable(membersData);
}

// 체크박스로 전체 선택, 전체 해제
const selectAllCheckbox = document.getElementById("selectAll");

function checkboxSelectAll() {
    const checkboxes = document.querySelectorAll("#memberTable tbody input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}
selectAllCheckbox.addEventListener("click", checkboxSelectAll);

window.onload = loadMembers;

// 초기화 버튼
const reset = document.getElementById('reset');

const resetbtn = () => {
    document.getElementById('name').value = '';
    document.getElementById('englishName').value = '';
    document.getElementById('github').value = '';
    document.getElementById('gender').selectedIndex = 0;
    document.getElementById('role').selectedIndex = 0;
    document.getElementById('firstWeekGroup').value = '';
    document.getElementById('secondWeekGroup').value = '';

    const membersData = JSON.parse(localStorage.getItem("membersData")) || [];
    
    appendMembersToTable(membersData);
};
reset.addEventListener('click', resetbtn);

// 검색 버튼
const search = document.getElementById('search');

const searchbtn = () => {
  // 소문자로 변환하기 !!
    const nameInput = document.getElementById('name').value.toLowerCase();
    const englishNameInput = document.getElementById('englishName').value.toLowerCase();
    const githubInput = document.getElementById('github').value.toLowerCase();
    const genderInput = document.getElementById('gender').value;
    const roleInput = document.getElementById('role').value;
    const firstWeekGroupInput = document.getElementById('firstWeekGroup').value;
    const secondWeekGroupInput = document.getElementById('secondWeekGroup').value;

    const tbody = document.querySelector('#memberTable tbody');
    tbody.innerHTML = '';

    const membersData = JSON.parse(localStorage.getItem("membersData")) || [];

    const filteredMembers = membersData.filter(member => {
        return (
            (nameInput === '' || member.name.toLowerCase().includes(nameInput)) &&
            (englishNameInput === '' || member.englishName.toLowerCase().includes(englishNameInput)) &&
            (githubInput === '' || member.github.toLowerCase().includes(githubInput)) &&
            (genderInput === '' || member.gender === genderInput) &&
            (roleInput === '' || member.role === roleInput) &&
            //숫자로 입력되기 때문에 자료형이 다르면 자동으로 형 변환을 시도한 후 비교하는 느슨한 비교를 사용한다고 함 !
            (firstWeekGroupInput === '' || member.firstWeekGroup == firstWeekGroupInput) &&
            (secondWeekGroupInput === '' || member.secondWeekGroup == secondWeekGroupInput)
        );
    });

    appendMembersToTable(filteredMembers);
};
search.addEventListener('click', searchbtn);

// 선택 삭제 버튼
const selectRemove = document.querySelector('.selectRemove');

selectRemove.addEventListener('click', function() {
    const checkboxes = document.querySelectorAll("#memberTable tbody input[type='checkbox']");
    // 삭제할 회원을 담을 배열 만들기 ! 체크해서 담을 수 있도록
    const idsToRemove = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            const id = checkbox.getAttribute('data-id'); 
            // 배열에 삭제할 회원 추가하기
            idsToRemove.push(id); 
            // 체크박스의 부모의 부모요소 ! 는 바로 체크박스를 포함하는 테이블 행
            checkbox.parentElement.parentElement.remove();
        }
    });

    const membersData = JSON.parse(localStorage.getItem("membersData")) || [];
    //getAttribute 사용해서 data-id 속성의 값을 가져올 때, 항상 문자열로 가져와지기 때문에 맞춰서 비교하려고 바꾸는 것
    const updatedMembersData = membersData.filter(member => !idsToRemove.includes(member.id.toString()));

    localStorage.setItem("membersData", JSON.stringify(updatedMembersData));
});

// 회원 추가 모달창
const addMember = document.querySelector('.addMember');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector(".closeModal");

addMember.addEventListener('click', function() {
    modalOverlay.style.display = 'block';
});

modalClose.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
    resetModalFields();
});

modalOverlay.addEventListener('click', function(modalnone) {
  // 클릭한 부분이 모달오버레이 그 자체인지 확인하기 ! 즉, 모달의 바깥부분을 눌러야만 삭제되도록
    if (modalnone.target === modalOverlay) {
        modalOverlay.style.display = 'none';
        resetModalFields();
    }
});

// 입력창 리셋하기
function resetModalFields() {
    document.getElementById('modalName').value = '';
    document.getElementById('modalEnglishName').value = '';
    document.getElementById('modalGithub').value = '';
    document.getElementById('modalGender').selectedIndex = 0;
    document.getElementById('modalRole').selectedIndex = 0;
    document.getElementById('modalFirstWeekGroup').value = '';
    document.getElementById('modalSecondWeekGroup').value = '';
}

// 회원 추가
const modalMemberPlus = document.querySelector('.modalMemberPlus');
modalMemberPlus.addEventListener('click', function() {
    const modalName = document.getElementById('modalName').value;
    const modalEnglishName = document.getElementById('modalEnglishName').value;
    const modalGithub = document.getElementById('modalGithub').value;
    const modalGender = document.getElementById('modalGender').value;
    const modalRole = document.getElementById('modalRole').value;
    const modalFirstWeekGroup = document.getElementById('modalFirstWeekGroup').value;
    const modalSecondWeekGroup = document.getElementById('modalSecondWeekGroup').value;

    // 비어있는 입력창 확인해서 alert창 띄우기
    if (!modalName || !modalEnglishName || !modalGithub || !modalGender || !modalRole || !modalFirstWeekGroup || !modalSecondWeekGroup) {
        alert('더 알고싶어요. 당신의 정보🌟😎\n모든 입력칸을 채워주세요❤️');
        return;
    }

    const membersData = JSON.parse(localStorage.getItem("membersData")) || [];
    // 가장 큰 id값 찾기 !
    const maxId = membersData.reduce((max, member) => Math.max(max, member.id), 0);
    
    const newMember = {
        id: maxId + 1,
        name: modalName,
        englishName: modalEnglishName,
        github: modalGithub,
        gender: modalGender,
        role: modalRole,
        firstWeekGroup: modalFirstWeekGroup,
        secondWeekGroup: modalSecondWeekGroup
    };

    membersData.push(newMember);

    localStorage.setItem("membersData", JSON.stringify(membersData));

    const tbody = document.querySelector('#memberTable tbody');
    const row = createMemberRow(newMember);

    tbody.appendChild(row);

    modalOverlay.style.display = 'none';
    resetModalFields();
});