import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
      },
      title: {
        fontSize: 60,
        fontWeight: "bold",
      },
      warning: {
        color: "red",
      },
      row:{
        padding:4,
       borderBottomColor:'red',
       borderBottomWidth:StyleSheet.hairlineWidth
      }
})
export default styles;