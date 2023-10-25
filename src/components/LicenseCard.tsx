import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import LabelText from './LabelText';
import SNSIcons from './SNSIcons';

type LicenseCardProps = {
  name: string;
  getDate: string;
  updateDate: string;
  imageUrl: string;
  detail: string;
  level: number;
};

const LicenseCard: React.FC<LicenseCardProps> = ({
  name,
  getDate,
  updateDate,
  imageUrl,
  detail,
  level,
}: LicenseCardProps) => {
  const stars = [];
  for (let i = 0; i < level; i++) {
    stars.push(<Icon key={i} name="star" size={20} color="gold" />);
  }

  let backgroundColor = ['#B87333', '#D2691E']; // デフォルトの背景色
  if (level >= 3) {
    backgroundColor = ['#FFD700', '#FFA500']; // 3つ以上の星の場合の背景色
  } else if (level >= 2) {
    backgroundColor = ['#B0B0B0', '#808080']; // 2つ以上の星の場合の背景色
  } else {
    backgroundColor = ['#B87333', '#D2691E']; // それ以外の場合の背景色
  }

  return (
    <LinearGradient
      style={{
        flex: 1,
        height: '100%',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
      }}
      colors={backgroundColor}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
        }}>
        <Image source={imageUrl} style={{width: 150, height: 150}} />
        <View style={{justifyContent: 'center'}}>
          {/* 資格詳細テキスト */}
          <LabelText label="資格名" content={name} />
          <LabelText label="取得日" content={getDate} />
          <LabelText label="更新日" content={updateDate} />
          <LabelText label="取得難易度" content={stars} />
          <LabelText label="資格詳細" content={detail} />
        </View>
      </View>
      {/* SNSアイコン */}
      <SNSIcons />
    </LinearGradient>
  );
};

export default LicenseCard;
