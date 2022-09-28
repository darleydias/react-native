import React,{useState,useEffect} from "react";
import { Modal,StyleSheet,Text,Pressable,View,TouchableOpacity } from "react-native";


const ModalConfirm=(props)=>{
    console.log()
    return(
        <>
        <View style={styles.centeredView}>
                    <Modal transparent={true} visible={props.modalVisible}  animationType="fade">
                    <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{ props.msg }</Text>
                                <TouchableOpacity style={styles.button} onPress={()=>{props.handlerDeletePress(props.codigo)}}>
                                    <Text style={styles.buttonText}>Confirmar</Text>
                                </TouchableOpacity>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {props.onClose()}}                        >
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </Pressable>
                              </View>
                        </View>
                    </Modal>
        </View>
        </>
    )
} 
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    custonButton: {
        marginTop: 10,
        height: 30,
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonClose: {
        backgroundColor: "#33525c",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
export default ModalConfirm