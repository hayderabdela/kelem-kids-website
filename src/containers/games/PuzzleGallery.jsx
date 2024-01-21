import React, { useEffect } from "react";
import one from "../../assets/puzzle-images/one.jpg";
import one1 from "../../assets/puzzle-images/one1.jpg";
import one2 from "../../assets/puzzle-images/one2.jpg";
import one3 from "../../assets/puzzle-images/one3.jpg";
import one4 from "../../assets/puzzle-images/one4.jpg";
import two from "../../assets/puzzle-images/two.jpg";
import two1 from "../../assets/puzzle-images/two1.jpg";
import two2 from "../../assets/puzzle-images/two2.jpg";
import two3 from "../../assets/puzzle-images/two3.jpg";
import three from "../../assets/puzzle-images/three.jpg";
import three1 from "../../assets/puzzle-images/three1.jpg";
import three2 from "../../assets/puzzle-images/three2.jpg";
import four from "../../assets/puzzle-images/four.jpg";
import four1 from "../../assets/puzzle-images/four1.jpg";
import four2 from "../../assets/puzzle-images/four2.jpg";
import four3 from "../../assets/puzzle-images/four3.jpg";
import five from "../../assets/puzzle-images/five.jpg";
import five1 from "../../assets/puzzle-images/five1.jpg";
import five2 from "../../assets/puzzle-images/five2.jpg";
import five3 from "../../assets/puzzle-images/five3.jpg";
import six from "../../assets/puzzle-images/six.jpg";
import six1 from "../../assets/puzzle-images/six1.jpg";
import six2 from "../../assets/puzzle-images/six2.jpg";
import six3 from "../../assets/puzzle-images/six3.jpg";
import seven from "../../assets/puzzle-images/seven.jpg";
import seven1 from "../../assets/puzzle-images/seven1.jpg";
import seven2 from "../../assets/puzzle-images/seven2.jpg";
import seven3 from "../../assets/puzzle-images/seven3.jpg";
import eight from "../../assets/puzzle-images/eight.jpg";
import eight1 from "../../assets/puzzle-images/eight1.jpg";
import eight2 from "../../assets/puzzle-images/eight2.jpg";
import eight3 from "../../assets/puzzle-images/eight3.jpg";
import nine from "../../assets/puzzle-images/nine.jpg";
import nine1 from "../../assets/puzzle-images/nine1.jpg";
import nine2 from "../../assets/puzzle-images/nine2.jpg";
import nine3 from "../../assets/puzzle-images/nine3.jpg";
import ten from "../../assets/puzzle-images/ten.jpg";
import ten1 from "../../assets/puzzle-images/ten1.jpg";
import ten2 from "../../assets/puzzle-images/ten2.jpg";
import ten3 from "../../assets/puzzle-images/ten3.jpg";
import { useData } from "../../context/DataContext";

const PuzzleGallery = () => {
  const datas = [
    one,
    one1,
    one2,
    one3,
    one4,
    two,
    two1,
    two2,
    two3,
    three,
    three1,
    three2,
    four,
    four1,
    four2,
    four3,
    five,
    five1,
    five2,
    five3,
    six,
    six1,
    six2,
    six3,
    seven,
    seven1,
    seven2,
    seven3,
    eight,
    eight1,
    eight2,
    eight3,
    nine,
    nine1,
    nine2,
    nine3,
    ten,
    ten1,
    ten2,
    ten3
  ];
  const { data, handleImageChange } = useData();
  useEffect(() => {
    handleImageChange(datas);
    console.log("the data from context", data);
  }, []);
};

export default PuzzleGallery;