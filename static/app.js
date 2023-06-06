function displayMemo(memo){
    const ul=document.querySelector("#memo-ul");
    const li=document.createElement("li");
    li.innerText=`[id:${memo.id}] ${memo.content}`;
    ul.appendChild(li);
}


async function readMemo() {
        const res =await fetch ("/memos"); 
        const jsonRes =await res.json();
        const ul=document.querySelector("memo-ul");
        ul.innerText="";
        jsonRes.forEach(displayMemo);
}


async function createMemo(value){ 
     const res = await fetch("/memos", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: new Date().getTime(),
            content: value,
        }),
     });
    readMemo();
}


function handleSubmit(event) {
    event.preventDefault(); // 기본 제출 동작 방지
    const input =document.querySelector("#memo-input");
    createMemo(input.value);
    input.value="";
  
    // 여기에 메모를 생성하는 로직을 추가할 수 있습니다.
    // 예를 들어, 입력된 메모를 가져와서 목록에 추가하는 등의 동작을 수행할 수 있습니다.
  }
  
  const form = document.querySelector("#memo-form");
  form.addEventListener("submit", handleSubmit);
  
  readMemo();