import { WhatIsSection } from "./WhatIsSection";
import { HowIsSection } from "./HowIsSection";
import { GenreSection } from "./GenreSection";
import { StyleSection } from "./StyleSection";
import { LanguageSection } from "./LanguageSection";

export const InformationPage = () => {
    return (
        <>
            <WhatIsSection />
            <HowIsSection />
            <GenreSection />
            <StyleSection />
            <LanguageSection />
        </>
    );
}