import { Observable } from "rxjs";
import { A } from "./a";
import { B } from "./b";
import { C } from "./c";

export interface BaseEntity {
    // Base functions
    log: () => void;
    getPolling: () => Observable<number>;

    // A Entity Functions
    a?: A;

    // B Entity Functions
    b?: B;

    // C Entity Functions
    c?: C;
}
