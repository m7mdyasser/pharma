import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";




export default function Chat({sender, receiver}) {
  const senderId = sender;
  const receiverId = receiver;
  const inputref = useRef();
  const [arrayofmessges, setArrayofmessges] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("messges")) {
      setArrayofmessges(JSON.parse(localStorage.getItem("messges")))
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      console.log(arrayofmessges);
      AddData(arrayofmessges)
    }, 0)
  }, [arrayofmessges]);

  function handelsend() {
    // @ts-ignore
    const content = inputref.current.value;
    // @ts-ignore
    if (content != "") {
      Addtasktoarray(content)
      // @ts-ignore
      inputref.current.value = "";
    }
  }
  function Addtasktoarray(messgedata) {
    const messge = {
      id: Date.now(),
      content: messgedata,
      // sent:false,
      // received:false ,
      // react: "love" ,
      senderId: senderId,
      receiverId: receiverId,
    }
    const newarray = [...arrayofmessges, messge]
    // @ts-ignore
    setArrayofmessges(newarray)
  }

  function AddData(arrayOfmessges) {
    window.localStorage.setItem("messges", JSON.stringify(arrayOfmessges))
  }

  return (

    <Box sx={{ backgroundColor: "whiteSmoke", width: "calc(100% - 80px)", height: "700px", display: "flex", }} >
      <Box sx={{ flexGrow: "3", backgroundColor: "green", display: "flex", flexDirection: "column", }}>
        <Box sx={{ width: "100%", height: "60px", backgroundColor: "whiteSmoke" }}></Box>
        <Box sx={{ width: "100%", height: "calc(100% - 120px)", }}>
          <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", backgroundColor: "blue", padding: "40px", gap: "10px", overflow: "auto" }}>
            {arrayofmessges.map((messge) => {
              let Side = ""
              let display = ""
              if (messge.senderId === senderId && messge.receiverId === receiverId) {
                Side = "flex-start"
                display = "flex"
              } else if (messge.senderId === receiverId && messge.receiverId === senderId) {
                Side = "flex-end"
                display = "flex"
              } else {
                display = "none"
              }
              return (<Box key={messge.id} sx={{ display: display, justifyContent: Side, }}><Box sx={{ color: "white", backgroundColor: "green", padding: "2px 5px", borderRadius: "5px" }}> {messge.content}</Box ></Box>)
            })}
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "60px", backgroundColor: "whiteSmoke", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <input ref={inputref} placeholder="ارسل رساله" style={{ width: "500px", height: " 40px", fontSize: "20px", outline: "none" }} />

          </Box>
          <Button onClick={handelsend} sx={{ marginLeft: "20px" }}> ارسال</Button>
        </Box>
      </Box>

      <Box sx={{ flexGrow: "1", backgroundColor: "red" }}></Box>

    </Box>

  )

}