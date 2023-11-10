import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from "react-native";

const PointInfo = ({ navigation, route }) => {
  const { item, point } = route.params;

  const currentPoint = point - item.point;

  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleExchangeGift = () => {
    setModalVisible(true);
    navigation.navigate("PointScreen", { point });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
          navigation.navigate("PointInfo", { item });
        }}
      >
        <Image source={item.img} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <View style={styles.pointContainer}>
            <Image source={item.imgP} style={styles.pointImage} />
            <Text style={styles.pointText}>{item.point}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Chi tiết quà tặng</Text>
        <Text style={styles.detailsText}>{item.title}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Điều kiện sử dụng</Text>
        <Text style={styles.detailsText}>{item.condition}</Text>
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={{ borderRadius: 10 }}>
          <Text style={styles.buttonText}>Đổi quà ngay</Text>
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity
        style={{ borderRadius: 10 }}
        onPress={handleExchangeGift}
      >
        <View
          style={{
            backgroundColor: "#024a9c",
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Đổi quà ngay
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Đổi quà thành công!</Text>
            <Button title="Đóng" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    borderRadius: 15,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    padding: 10,
    marginLeft: 10,
    borderRadius: 55,
  },
  textContainer: {
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  date: {
    fontSize: 12,
    color: "#7f7f7f",
  },
  pointContainer: {
    flexDirection: "row",
    marginTop: 5,
    width: 80,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  pointImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    borderRadius: 50,
  },
  pointText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
  },
  detailsContainer: {
    marginTop: 15,
    paddingLeft: 15,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsText: {
    fontSize: 15,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  // Add this to your existing styles or create a new style object
  // buttonContainer: {
  //   marginTop: 20,
  //   alignItems: "center",
  //   width: "100%",
  //   height: 50,
  //   borderRadius: 10,
  //   height: 40,
  //   borderRadius: 10,
  // },
  // buttonText: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   color: "#fff", // You can customize the text color
  //   backgroundColor: "#024a9c", // You can customize the background color
  //   paddingVertical: 10,
  //   paddingHorizontal: 130,
  //   borderRadius: 10,
  // },
});

export default PointInfo;
