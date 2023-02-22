interface ITotal {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotal): number => {
  let res: number = price;
  if (isInstallment) {
    res = (price * (100 - discount)) / 100 / months;
  }
  return res;
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// 6250
