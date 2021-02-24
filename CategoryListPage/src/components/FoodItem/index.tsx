import React, { FC } from 'react';
import styles from './index.less';

const AddPng =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACyElEQVRYR9WZTUhUURSAvzPzMiKCIBdZQlJE4oy4qEha5TY3QSmGQtEqRfe6CIQWujfUVVQ4RuqijW1tFUK1kJnCiMLAMsggiCjtjSfu05EZdX7em2fd3mpg7jnne+e+e/6uEOTp10jdcc5GHZrW4LQop4AqhAOeOuU7sKTCmwi8TLvMvH7Pc/plza858SPQMKFH3VW6RegAqv3IAouqjDkV3JlrlY+lypYEWHtfDzkOtxFuoOwtVfmO64QVlLuuy635a/K1mK6igLGEtgFDApXFlPn5X2FZInSnrsqjQnJ5AS/MqLP8iSHgph/DAdaOVh6h52mTuDvJ7ghYPaH7DrpMojQHMOhfRJj+5tCy2Co/twpvA/Q8t8TjvwaXIRKmK6u4tNWT2wDjCR0Jsq1G0cWadWtPFkykCfSMptqlM1syB9AcCIGHQVQ318Dg+XXJ3mcwvRBECxChLfvgbAKaUBJ1mA96Wjvroat+HWo4CSPJYIDmdKddajMhaBMwntBhIMe9fkyEBbhhcyTVLl3mtwdoMkTa5V05QThUQGEl6nDCZBwPMDamAyL0+vHY1rWhApp0rgy+6pA+oV8j8ZN8CJBbcxjDBjS5O/WWY1L3QM9FosyW4z0juwuArKVplPpx7VVlwEZAEfokltApgcs2AqowJfExTSLEbQRESUk8oV8oUEr1NMD1WqiIlvsKufKrabg3D0NzBfUuS3xcfxWKf7MtsH9PuHAZbT9+Q+NkAd3CSlHAf+pBD7DIFpfqu90IM5iq2+pDAkmJjeukKFdK9VS+dbvhQS/MWB+orU911hcL9pdb/0PBarxodclvAMttmsLq6vI2Td63WEbbGVJfnL/tzATgoI17uYF+Q75w424WWT/6MJBWD48yW2X1+C37e7J2gJkNafUIOBvU2iH6thCSfQ2hnPGuIYTDOdcQymfvGkJ4Uc41xB9E44sU4Tim1wAAAABJRU5ErkJggg==';

const ReducePng =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADsElEQVRYR9WZXWgcVRTHf//NJEHQIhjRaqBSaS2ZKX0woi9+9NEWRVBD3Q1U++IH7ZMILaKuilQQnyq2vlQrmS2mfRCl9bFqX4Tah5LZ0A8MFqK1GEGsoEkme2TGnTDZ3bi77q6M87TMPR+/Pfeee8+cK/7NU7TcyHru6XPYWoG7ZdwFrEXcEJszrgFXTFzIwdmlkFPTM5yhqEq77tSOwpZJuz1cYLfEODDcji4wa8aEM8B758b0Q6u6LQFuOmI3OQ5vInZhDLZqvKGcmMc4HIa8cn6nfmlmqymg69sO4IBgqMbYVeCkia8kygvG947Db5FMGLJmQNxhhivjQWAbcEta32BOOXYHT+mTf4JcFfChU+bM/cgB4LkVhsVp4J3yRb6gqLBZBOLxojnuRh4GXpJxf43OoaHb2PPl1sa2GgIOT9p1N4Ycw9ieMjYj2DNV0MmWoFYR2uzbNiP+4+uXRcSJXx2enB3TH7VqdYBx5K7waRrOoGT9PDs9pt87gUt0Rybtei3ygSCfhhxay2O1kawD9Hw7mJ5WM94oj+u1boDV2nAn7HWJV1PvDwUFPZ+WWwEYJYTgaCLQS7jERx1kjh3pxFkGjLaSPofzSbZG01ouqNCLyNVF0jc/me4ou5dCNiVb0DKg59v7QBLemUo/W7q15pr9yWhN5hY5l0qcg0FBL0R6MWB0QiyFfJdswoLtnWZrM6ja8Wp2n4jfi/k+hzujEycGdCdsv8Te6LeJ0+W8HmjXQTfk3ZJ9neyTZrxdHtc+UbSct4HLydlq4tFyXp93w2G7NtySPSLjs6rebHCJdRr52O7N9fFN9eXV4BLDLZ8Q7RI0ky+a421gNjkWK0vcp80l22vG/qruh0FBu5rZ6eW459th4Jl4KYp9cn07Lni8uv6eLud1pJcAzWy7Jdsp46Mqz3F5EzaF8KopPTpV0NlmRno57h21USqciX0YgTzffqZaSi2Imy/mNdcIwPPtLcSLXaoH3w0KermRn40lGxowIqbomZNXsj8Tp5V+BqfHtLAKYFTr/V3Sd/5cCwpa08jMyKQN5BaZj8fEfDuA/0kE6wFbnOLOg9aahfopznKSwJTckh2T8URmt5nMb9SZP+oyXyxEay/b5db/oWCNopjpkj8CzPxHU7wWs/zZmRxEmf5wjyAz3/qIIDPdPEqmOtPtt3Rh1EoDM2cE8+JyuoE5aKyrCK9nDcw0ZKZbwGnQzDbR62rh9DWEMRpfQ4hbV1xDGD/F1xDi206uIf4CwMQ4I+Q4ErQAAAAASUVORK5CYII=';
export interface FoodDataProps {
  id: string | number;
  img: string;
  title: string;
  subTitle: string;
  monthSale: number;
  upNum: number;
  tip: string;
  amount: number;
}

interface FoodItemProps {
  data: FoodDataProps;
  categoryId: string | number; // 类目id
  operClick: (data: FoodDataProps, id: string | number, type: 'add' | 'reduce') => void; // 加减食物的操作
  foodValue: any;
}

const FoodItem: FC<FoodItemProps> = (props) => {
  const { data, categoryId = '', operClick, foodValue = {} } = props;
  return (
    <div className={styles.foodItemStyle} key={data?.id}>
      <img src={data?.img} alt="" className={styles.foodImg} />
      <div className={styles.foodContent}>
        <div className={styles.title}>{`${data?.title}-${categoryId}-${data?.id}`}</div>
        <div className={styles.subTitle}>{data?.subTitle}</div>
        <div className={styles.subTitle}>
          月售{data?.monthSale}
          &nbsp;赞{data?.upNum}
        </div>
        <div className={styles.tipStyle}>{data?.tip}</div>
        <div className={styles.footer}>
          <div className={styles.money}>¥{data?.amount}</div>
          <div className={styles.oper}>
            {foodValue[`${categoryId}-${data?.id}`]?.quantity > 0 && (
              <React.Fragment>
                <img
                  src={ReducePng}
                  alt=""
                  className={styles.addImg}
                  onClick={() => operClick(data, categoryId, 'reduce')}
                />
                <div className={styles.num}>{foodValue[`${categoryId}-${data?.id}`]?.quantity}</div>
              </React.Fragment>
            )}
            <img
              src={AddPng}
              alt=""
              className={styles.addImg}
              onClick={() => operClick(data, categoryId, 'add')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
