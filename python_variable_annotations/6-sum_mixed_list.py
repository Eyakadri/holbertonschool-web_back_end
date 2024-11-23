#!/usr/bin/env python3
"""returns the sum of the input list as a float"""


from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """returns the sum of the input list as a float
    Args:
        mxd_lst (list): The list to sum
    Returns:
        float: The sum of the list
    """
    return float(sum(mxd_lst))
