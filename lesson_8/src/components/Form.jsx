import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form({
  onSubmit,
  setName,
  setSurname,
  setPhone,
  newname,
  newphone,
  newsurname,
}) {

  if(newsurname==undefined){
    newsurname='';
    newphone='';
    newname=''
  }
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        borderRadius: "20px",
        alignItems: "stretch",
        flexDirection: "column",
        m: 1,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",

        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
    >
      <TextField
        required
        defaultValue={String(newname)}
        label="Имя"
        placeholder="Александр"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        defaultValue={String(newsurname)}
        required
        label="Фамилия"
        placeholder="Александров"
        onChange={(event) => setSurname(event.target.value)}
      />
      <TextField
        defaultValue={String(newphone)}
        label="Телефон"
        type="tel"
        placeholder="+380"
        onChange={(event) => setPhone(event.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 0 10px 0 ",
        }}
      >
        <Button onClick={onSubmit} variant="contained" color="success">
          Сохранить
        </Button>
        <Button variant="outlined" color="error">
          Удалить
        </Button>
      </Box>
    </Box>
  );
}
