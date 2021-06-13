import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, View } from "react-native";
import commonStyles, { em } from "../common/commonStyles";
import { storageKeys } from "../common/constants";
import { NoBgButton, PrimaryButton } from "../components/common/buttons";
import { H1, P } from "../components/common/typography";
import Popup from "../components/common/popup";
import ChartListForm from "../components/forms/chartListForm";
import { FontAwesome } from "@expo/vector-icons";

export interface ChartListScreenProps {}

const ChartListScreen: React.FC<ChartListScreenProps> = () => {
  const [chartList, setChartList] = React.useState<Array<IChartList>>([]);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  async function getChartList() {
    const p = await AsyncStorage.getItem(storageKeys.chartList);
    setChartList(p ? JSON.parse(p) : []);
  }

  React.useEffect(() => {
    getChartList();
  }, []);

  function handleChartAdd() {
    hideModal();
    getChartList();
  }

  function deleteChart(index: number) {
    const p = [...chartList];

    p.splice(index, 1);

    setChartList(p);
    AsyncStorage.setItem(storageKeys.chartList, JSON.stringify(p));
  }

  function chartListItem({ item, index }: ListRenderItemInfo<IChartList>) {
    return (
      <View style={styles.listItem}>
        <Pressable onPress={() => console.log("open", index, ". ", item)} style={styles.p}>
          <P>{item.title}</P>
        </Pressable>
        <NoBgButton onPress={() => deleteChart(index)} mini>
          <FontAwesome name="trash" style={styles.icon} />
        </NoBgButton>
      </View>
    );
  }

  return (
    <React.Fragment>
      <Popup onClose={hideModal} visible={visible}>
        <ChartListForm onSubmit={handleChartAdd} />
      </Popup>

      <View style={{ ...commonStyles.container }}>
        <H1>Your charts</H1>

        <View style={styles.addCont}>
          <PrimaryButton onPress={showModal}>Add</PrimaryButton>
        </View>

        <View style={styles.listCont}>
          <FlatList data={chartList} renderItem={chartListItem} keyExtractor={item => item.id} />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  addCont: {
    width: 80
  },
  listCont: {
    marginTop: em
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  p: {
    paddingVertical: 0.25 * em,
    flex: 1
  },
  icon: {
    fontSize: 1.2 * em
  }
});

export default ChartListScreen;
