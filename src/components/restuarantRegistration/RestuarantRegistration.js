import { Container, AppBar, TextField, Button, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { AccountCircle, KeyboardArrowDown } from "@material-ui/icons";
import useStyles from "./styles";
import { useState } from "react";
import { registerRestaurant } from "../../actions";
import logo from '../home/images/logo.png';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import FileBase from "react-file-base64";


const initialState = { registeredPhone: '', restaurantName:'', address:'', phone: '', ownerName:'', ownerPhone:'', category: '', image: null, pincode: ''};
const menuInitialState = { itemName: '', price: '', itemDescription: '', itemImage: null}


export const RestuarantRegistration = () => {
  const classes = useStyles();
  const [dropDown1Value, setDropDown1Value] = useState(true);
  const [dropDown2Value, setDropDown2Value] = useState(false);
  const [dropDown3Value, setDropDown3Value] = useState(false);
  const [dropDown4Value, setDropDown4Value] = useState(false);
  const [dropDown5Value, setDropDown5Value] = useState(false);
  const [ formData, setFormData ] = useState(initialState);
  const [ color, setColor ] = useState('white');
  const [ color1, setColor1 ] = useState('white');
  const [ color2, setColor2 ] = useState('white');
  const [ color4, setColor3 ] = useState('white');
  const [menuData, setMenuData] = useState(menuInitialState);
  let menu = [];
  const phone =  JSON.parse(localStorage.getItem('profile')).result.phone;


  const [ restaurantImage, setRestaurantImage] = useState(null);
  const [ itemImage, setItemImage ] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropDown1 = () => {
    setColor('white');
    setDropDown1Value((dropDown1Value) => !dropDown1Value);
  };


  const dropDown2 = () => {
    setColor1('white');
    setDropDown2Value((dropDown2Value) => !dropDown2Value);
  };

  const dropDown3 = () => {
    setColor2('white');
    setDropDown3Value((dropDown3Value) => !dropDown3Value);
  };

  const dropDown4 = () => {
    setColor3('white');
    setDropDown4Value((dropDown4Value) => !dropDown4Value);
  };


    const handleSubmit1 = (e) => {
        dropDown1();
        setColor('#3366CC');
        setDropDown2Value(true);
        e.preventDefault();
      };

      const handleSubmit2 = (e) => {
        dropDown2();
        setColor1('#3366CC');
        setDropDown3Value(true);
        e.preventDefault();
      };

      const handleSubmit3 = (e) => {
        dropDown3();
        setColor2('#3366CC');
        setDropDown4Value(true);
        e.preventDefault();
      };

      const handleSubmit4 = (e) => {
        dropDown4();
        setColor3('#3366CC');
        setDropDown5Value(true);
        e.preventDefault();
      };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleChangeMenu = (e) => {
    setMenuData({...menuData, [e.target.name]: e.target.value})
  }

  const handleChangeMenuItemImage = (e) => {
    setMenuData({...menuData, [e.target.name]: e.target.files[0]});
  }

  // const handleChangeRestaurantImage = (e) => {
  //   setFormData({...formData, [e.target.name]: iles[0]});
  // }

  const addMore = () => {
    console.log(menu);
    document.getElementById('itemName').value='';
    document.getElementById('price').value='';
    document.getElementById('itemDescription').value='';
    menu.push(menuData);
    setMenuData(menuInitialState);
    console.log(menu);
  }

  const submit = (e) => {
    e.preventDefault();
    menu.push(menuData);
    setMenuData(menuInitialState);
    const data = {formData, menu, phone}
    dispatch(registerRestaurant(data, navigate))
    registerRestaurant(data);
  }
  return (
    <>
      <AppBar className={classes.navAppBar}>
        <div className={classes.navAppBarDiv1}>
          <div className={classes.navAppBarDiv11}><img src={logo} style={{maxWidth: '13%'}}/></div>
          <div className={classes.navAppBarDiv12}>
            <AccountCircle style={{ color: "black" }} />
          </div>
          <div className={classes.navAppBarDiv13}>Satyansh</div>
        </div>
      </AppBar>

        <Container className={classes.mainContainer}>
        <div className={classes.div1}>Restuarant Information</div>
        <Container className={classes.container1} style={{backgroundColor: `${color}`}}>
          <span className={classes.container1span1}>Restaurant Details</span>
          <Button
            onClick={() => dropDown1()}
            className={classes.container1Button}
          >
            <KeyboardArrowDown />
          </Button>
          <div className={classes.container1div2}>
            Name, address and location
          </div>
          {dropDown1Value ? (
            <form onSubmit={handleSubmit1} name='dropDown1'>
              <TextField
              onChange={handleChange}
                name="restaurantName"
                className={classes.textField}
                variant="outlined"
                label="Restuarant Name"
                fullWidth
                required
              />


<TextField
                onChange={handleChange}
                name="category"
                className={classes.textField}
                variant="outlined"
                label="Category"
                fullWidth
                required
              />


              <TextField
                onChange={handleChange}
                name="address"
                className={classes.textField}
                variant="outlined"
                label="Restuarant Complete Address"
                fullWidth
                required
              />


<TextField
                onChange={handleChange}
                name="pincode"
                className={classes.textField}
                variant="outlined"
                label="Pincode"
                fullWidth
                required
              />
              <Button type="submit" style={{backgroundColor: 'blueviolet', marginLeft: '93%', color:'white'}}>Next</Button>
            </form>
          ) : (
            console.log()
          )}
        </Container>

        <Container className={classes.container2} style={{backgroundColor: `${color1}`}}>
          <span className={classes.container2span1}>
            Contact Number At Restaurant
          </span>
          <Button
            onClick={() => dropDown2()}
            className={classes.container1Button}
          >
            <KeyboardArrowDown />
          </Button>
          <div className={classes.container1div2}>
            Your customers will call on this number for general enquiries
          </div>
          {dropDown2Value ? (
            <form onSubmit={handleSubmit2}>
              <TextField
              onChange={handleChange}
                name="phone"
                className={classes.textField}
                variant="outlined"
                label="Mobile Number At Restuarant"
                fullWidth
                required
              />

              <TextField
              onChange={handleChange}
                name="landline"
                className={classes.textField}
                variant="outlined"
                label="Landline Number At Restaurant"
                fullWidth
              />
               <Button type="submit" style={{backgroundColor: 'blueviolet', marginLeft: '93%', color:'white'}}>Next</Button>
            </form>
          ) : (
            console.log()
          )}
        </Container>

        <Container className={classes.container2} style={{backgroundColor: `${color2}`}}>
          <span className={classes.container2span1}>Owner Details</span>
          <Button
            onClick={() => dropDown3()}
            className={classes.container1Button}
          >
            <KeyboardArrowDown />
          </Button>
          <div className={classes.container1div2}>
            Your customers will call on this number for general enquiries
          </div>
          {dropDown3Value ? (
            <form onSubmit={handleSubmit3}>
              <TextField
              onChange={handleChange}
                name="ownerName"
                className={classes.textField}
                variant="outlined"
                label="Owner Name"
                fullWidth
                required
              />

              <TextField
              onChange={handleChange}
                name="ownerPhone"
                className={classes.textField}
                variant="outlined"
                label="Owner Contact"
                required
                fullWidth
              />
               <Button type="submit" style={{backgroundColor: 'blueviolet', marginLeft: '93%', color:'white'}}>Next</Button>
            </form>
          ) : (
            console.log()
          )}
        </Container>

        <Container className={classes.container2}>
          <span className={classes.container2span1}>Restaurant Image</span>
          <Button
            onClick={() => dropDown4()}
            className={classes.container1Button}
          >
            <KeyboardArrowDown />
          </Button>
          <div className={classes.container1div2}>
            Upload an Image of your Restaurant for better reach
          </div>
          {dropDown4Value ? (
            <form onSubmit={handleSubmit4}>
             
<FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, image: base64 })
            }
          />




              <Button type="submit" style={{backgroundColor: 'blueviolet', marginLeft: '93%', color:'white'}}>Next</Button>
              </form>
          ) : (
            console.log()
          )}
        </Container>





        
        <Container className={classes.container2} style={{backgroundColor: 'white', marginBottom: '10%'}}>
          <span className={classes.container2span1}>Add Menu</span>
          <Button
            onClick={() => dropDown3()}
            className={classes.container1Button}
          >
            <KeyboardArrowDown />
          </Button>
          <div className={classes.container1div2}>
            Your customers will call on this number for general enquiries
          </div>
          {dropDown5Value ? (
            <form onSubmit={submit}>
              <TextField
              id="itemName"
              onChange={handleChangeMenu}
                name="itemName"
                className={classes.textField}
                variant="outlined"
                label="Item Name"
                fullWidth
                required
              />

              <TextField
              id="price"
              onChange={handleChangeMenu}
                name="price"
                className={classes.textField}
                variant="outlined"
                label="Price"
                required
                fullWidth
              />

            <TextField
            id="itemDescription"
              onChange={handleChangeMenu}
                name="itemDescription"
                className={classes.textField}
                variant="outlined"
                label="Item Description"
                required
                fullWidth
              />

<FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setMenuData({ ...menuData, itemImage: base64 })
            }
          />
              
            <div style={{color: 'grey'}}>Item Image(optional)</div>

<div style={{display: 'flex'}}>
                <Button onClick={() => addMore()} style={{backgroundColor: 'grey', marginLeft: '79%', color:'white'}}>Add next</Button>
               <Button type="submit" style={{backgroundColor: 'blueviolet', marginLeft: '3%', color:'white'}}>Next</Button>
               </div>
            </form>
          ) : (
            console.log()
          )}
        </Container>
        
      </Container>




      <BottomNavigation style={{position: 'fixed', bottom: '0', left: '0', right: '0', border: '1px solid grey'}}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <span style={{color: 'grey', marginTop: '1.3%', paddingLeft: '2%'}}>Finish Registration</span>
        <BottomNavigationAction onClick={(e) => submit(e)} label="Submit" style={{marginLeft:'auto', order: '2', backgroundColor: 'green', color: 'white', }}/>
      </BottomNavigation>
    </>
  );
};
