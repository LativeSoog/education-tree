import { Button } from "@/shared/ui/button/Button";
import S from "./CatalogToolbar.module.scss";
import { CalculatorIcon } from "@/assets/icons";

type CatalogToolbarProps = {
  onCalcOpen: () => void;
};

export const CatalogToolbar = ({ onCalcOpen }: CatalogToolbarProps) => {
  return (
    <div className={S["catalog-toolbar"]}>
      <Button
        variant="primary"
        className={S["catalog-toolbar__calc"]}
        onClick={onCalcOpen}>
        <CalculatorIcon className={S["catalog-toolbar__calc-icon"]} />
        <span className={S["catalog-toolbar__calc-label"]}>
          Калькулятор ЕГЭ
        </span>
      </Button>
    </div>
  );
};
