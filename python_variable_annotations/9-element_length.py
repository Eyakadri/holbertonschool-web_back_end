#!/usr/bin/env python3
"""Module for annotating list operations with their types."""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples containing sequences and their lengths
    Args:
        lst (Iterable[Sequence]): Iterable of sequences to process
    Returns:
    List[Tuple[Sequence, int]]: List of tuples
    """
    return [(i, len(i)) for i in lst]
