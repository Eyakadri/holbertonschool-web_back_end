#!/usr/bin/env python3
"""augment the code with the correct duck-typed annotations"""

from typing import List, Any, Sequence, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """return the first element of a list if it exists, otherwise None"""

    if lst:
        return lst[0]
    else:
        return None
