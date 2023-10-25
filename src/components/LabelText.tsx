import React from 'react';
import {Text, View} from 'react-native';

type LabelTextProps = {
  label: string;
  content: string;
};

const LabelText: React.FC<LabelTextProps> = ({
  label,
  content,
}: LabelTextProps) => {
  return (
    <View>
      <Text>~ {label} ~</Text>
      <Text style={{width: '60%', fontWeight: '600', marginBottom: 10}}>
        {content}
      </Text>
    </View>
  );
};

export default LabelText;
