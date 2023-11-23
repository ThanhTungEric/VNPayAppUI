import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

function ConfirmModal({ isVisible, onConfirm, onCancel }) {
  // Hàm xử lý khi nhấn nút "Tiếp tục" để chuyển trang
  const handleConfirm = () => {
    onConfirm(); // Gọi hàm truyền vào từ prop để chuyển trang
  };

  // Hàm xử lý khi nhấn nút "Hủy bỏ" để đóng modal mà không chuyển trang
  const handleCancel = () => {
    onCancel(); // Gọi hàm truyền vào từ prop để đóng modal
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.Container}>
        <Text style={styles.Header}>Đổi số điện thoại đăng nhập</Text>
        <Text style={styles.Content}>
          Bạn có chắc chắn muốn đăng nhập Ví VNPay bằng số điện thoại khác?
        </Text>
        <View style={styles.CancelContinue}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.Cancel}>Hủy bỏ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleConfirm}
            style={styles.ContinueContainer}
          >
            <Text style={styles.Continue}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    width: "90%",
    height: 150,
    alignSelf: "center",
    borderRadius: 10,
    padding: 7,
  },
  Content: {
    alignSelf: "center",
    marginTop: 10,
    textAlign: "center",
  },
  Header: {
    alignSelf: "center",
    marginTop: 10,
    textAlign: "center",
  },
  ContinueContainer: {
    backgroundColor: "red",
    width: "20%",
    borderRadius: 10,
    backgroundColor: "#024a9c",
    height: 40,
    marginRight: 15,
  },
  Continue: {
    color: "#fff",
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  Cancel: {
    marginTop: 10,
    marginLeft: 180,
  },
  CancelContinue: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
export default ConfirmModal;
