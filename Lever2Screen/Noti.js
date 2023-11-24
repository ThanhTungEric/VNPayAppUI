import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QRCode from 'react-native-qrcode-svg'
import { useFocusEffect } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

function Noti() {
    return (
        <View style={{marginBottom: 75}}>
            <View style={{ backgroundColor: "#fff", paddingHorizontal: 20, width: "100%", alignItems: "center" }}>
                <View style={{ backgroundColor: "#f7f7f7", flexDirection: "row", width: "90%", height: 54, justifyContent: "center", alignItems: "center", marginBottom: 10, marginTop: 10, borderRadius: 30 }}>
                    <View style={{ height: 40, width: "30%", marginRight: 15, backgroundColor: "#f7f7f7", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <Text style={{ fontSize: 17, fontWeight: "600" }}>Khuyến mại</Text>
                    </View>
                    <View style={{ height: 40, width: "30%", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <Text style={{ fontSize: 17, fontWeight: "600" }}>Giao dịch</Text>
                    </View>
                    <View style={{ height: 40, width: "30%", backgroundColor: "#f7f7f7", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                        <Text style={{ fontSize: 17, fontWeight: "600" }}>Khác</Text>
                    </View>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: "100%", marginBottom: 60 }}
            >
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Text style={{ backgroundColor: "#f0f0f0", paddingHorizontal: 8, paddingVertical: 5, width: 120, textAlign: "center", borderRadius: 15 }}>24/11/2023</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/icons/noti.png")} style={{ width: 50, height: 50, borderRadius: 25 }} />
                                <View style={{ marginLeft: 8, justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16 }}>24/11/2023 07:27</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nạp tiền điện thoại</Text>
                                </View>
                            </View>
                            <SimpleLineIcons name="options-vertical" size={24} color="black" />
                        </View>
                        <View style={{ width: "95%", marginTop: 20 }}>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Thời gian giao dịch</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>24/11/2023 07:27</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Số tiền giao dịch</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>-20000 VND</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Số dư cuối</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>210 VND</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Nội dung</Text>
                                <View style={{ width: "80%", alignSelf: "flex-end" }}>
                                    <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold", flexWrap: 'wrap', textAlign: 'right' }}>Thanh toán nạp tiền điện thoại - 0817218942</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Text style={{ backgroundColor: "#f0f0f0", paddingHorizontal: 8, paddingVertical: 5, width: 120, textAlign: "center", borderRadius: 15 }}>24/11/2023</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/icons/noti.png")} style={{ width: 50, height: 50, borderRadius: 25 }} />
                                <View style={{ marginLeft: 8, justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16 }}>23/11/2023 19:27</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Gửi tiền</Text>
                                </View>
                            </View>
                            <SimpleLineIcons name="options-vertical" size={24} color="black" />
                        </View>
                        <View style={{ width: "95%", marginTop: 20 }}>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Thời gian giao dịch</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>23/11/2023 19:27</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Số tiền giao dịch</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>-20000 VND</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Số dư cuối</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>20010 VND</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Nội dung</Text>
                                <View style={{ width: "80%", alignSelf: "flex-end" }}>
                                    <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold", flexWrap: 'wrap', textAlign: 'right' }}>Chuyển tiền cho Thanh - 0787944346</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Text style={{ backgroundColor: "#f0f0f0", paddingHorizontal: 8, paddingVertical: 5, width: 120, textAlign: "center", borderRadius: 15 }}>24/11/2023</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../assets/icons/noti.png")} style={{ width: 50, height: 50, borderRadius: 25 }} />
                                <View style={{ marginLeft: 8, justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16 }}>22/11/2023 20:27</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nạp tiền</Text>
                                </View>
                            </View>
                            <SimpleLineIcons name="options-vertical" size={24} color="black" />
                        </View>
                        <View style={{ width: "95%", marginTop: 20 }}>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Thời gian giao dịch</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>22/11/2023 20:27</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Số tiền giao dịch</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>40000 VND</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Số dư cuối</Text>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>40010 VND</Text>
                            </View>
                            <View style={styles.key}>
                                <Text style={{ color: "#858585", fontSize: 17 }}>Nội dung</Text>
                                <View style={{ width: "80%", alignSelf: "flex-end" }}>
                                    <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold", flexWrap: 'wrap', textAlign: 'right' }}>Nạp tiền từ - 0817218942</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Noti;

const styles = StyleSheet.create({
    key: {
        flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", paddingVertical: 5
    }
})
