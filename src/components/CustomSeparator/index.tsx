import { SeparatorRoot } from './styles'

interface CustomSeparatorProps {
    orientation?: string;
}

const CustomSeparator = ({orientation}: CustomSeparatorProps) => {
    const dataOrientation = orientation as 'horizontal' | 'vertical' | undefined;

    return (
        <SeparatorRoot css={{ margin: '15px 0' }} data-orientation={dataOrientation} />
    )
};

export default CustomSeparator;
