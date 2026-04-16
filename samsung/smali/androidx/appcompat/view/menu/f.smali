.class abstract Landroidx/appcompat/view/menu/f;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Lf/h;
.implements Landroidx/appcompat/view/menu/h;
.implements Landroid/widget/AdapterView$OnItemClickListener;


# instance fields
.field private b:Landroid/graphics/Rect;


# direct methods
.method constructor <init>()V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method protected static p(Landroid/widget/ListAdapter;Landroid/view/ViewGroup;Landroid/content/Context;I)I
    .locals 9

    const/4 v0, 0x0

    invoke-static {v0, v0}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v1

    invoke-static {v0, v0}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v2

    invoke-interface {p0}, Landroid/widget/ListAdapter;->getCount()I

    move-result v3

    const/4 v4, 0x0

    move v5, v0

    move v6, v5

    move-object v7, v4

    :goto_0
    if-ge v0, v3, :cond_4

    invoke-interface {p0, v0}, Landroid/widget/ListAdapter;->getItemViewType(I)I

    move-result v8

    if-eq v8, v6, :cond_0

    move-object v7, v4

    move v6, v8

    :cond_0
    if-nez p1, :cond_1

    new-instance p1, Landroid/widget/FrameLayout;

    invoke-direct {p1, p2}, Landroid/widget/FrameLayout;-><init>(Landroid/content/Context;)V

    :cond_1
    invoke-interface {p0, v0, v7, p1}, Landroid/widget/ListAdapter;->getView(ILandroid/view/View;Landroid/view/ViewGroup;)Landroid/view/View;

    move-result-object v7

    invoke-virtual {v7, v1, v2}, Landroid/view/View;->measure(II)V

    invoke-virtual {v7}, Landroid/view/View;->getMeasuredWidth()I

    move-result v8

    if-lt v8, p3, :cond_2

    return p3

    :cond_2
    if-le v8, v5, :cond_3

    move v5, v8

    :cond_3
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_4
    return v5
.end method

.method protected static y(Landroidx/appcompat/view/menu/d;)Z
    .locals 5

    invoke-virtual {p0}, Landroidx/appcompat/view/menu/d;->size()I

    move-result v0

    const/4 v1, 0x0

    move v2, v1

    :goto_0
    if-ge v2, v0, :cond_1

    invoke-virtual {p0, v2}, Landroidx/appcompat/view/menu/d;->getItem(I)Landroid/view/MenuItem;

    move-result-object v3

    invoke-interface {v3}, Landroid/view/MenuItem;->isVisible()Z

    move-result v4

    if-eqz v4, :cond_0

    invoke-interface {v3}, Landroid/view/MenuItem;->getIcon()Landroid/graphics/drawable/Drawable;

    move-result-object v3

    if-eqz v3, :cond_0

    const/4 v1, 0x1

    goto :goto_1

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    :goto_1
    return v1
.end method

.method protected static z(Landroid/widget/ListAdapter;)Landroidx/appcompat/view/menu/c;
    .locals 1

    instance-of v0, p0, Landroid/widget/HeaderViewListAdapter;

    if-eqz v0, :cond_0

    check-cast p0, Landroid/widget/HeaderViewListAdapter;

    invoke-virtual {p0}, Landroid/widget/HeaderViewListAdapter;->getWrappedAdapter()Landroid/widget/ListAdapter;

    move-result-object p0

    check-cast p0, Landroidx/appcompat/view/menu/c;

    return-object p0

    :cond_0
    check-cast p0, Landroidx/appcompat/view/menu/c;

    return-object p0
.end method


# virtual methods
.method public d(Landroidx/appcompat/view/menu/d;Landroidx/appcompat/view/menu/e;)Z
    .locals 0

    const/4 p1, 0x0

    return p1
.end method

.method public k(Landroid/content/Context;Landroidx/appcompat/view/menu/d;)V
    .locals 0

    return-void
.end method

.method public l(Landroidx/appcompat/view/menu/d;Landroidx/appcompat/view/menu/e;)Z
    .locals 0

    const/4 p1, 0x0

    return p1
.end method

.method public abstract m(Landroidx/appcompat/view/menu/d;)V
.end method

.method protected n()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method

.method public o()Landroid/graphics/Rect;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/f;->b:Landroid/graphics/Rect;

    return-object v0
.end method

.method public onItemClick(Landroid/widget/AdapterView;Landroid/view/View;IJ)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/widget/AdapterView<",
            "*>;",
            "Landroid/view/View;",
            "IJ)V"
        }
    .end annotation

    invoke-virtual {p1}, Landroid/widget/AdapterView;->getAdapter()Landroid/widget/Adapter;

    move-result-object p1

    check-cast p1, Landroid/widget/ListAdapter;

    invoke-static {p1}, Landroidx/appcompat/view/menu/f;->z(Landroid/widget/ListAdapter;)Landroidx/appcompat/view/menu/c;

    move-result-object p2

    iget-object p2, p2, Landroidx/appcompat/view/menu/c;->b:Landroidx/appcompat/view/menu/d;

    invoke-interface {p1, p3}, Landroid/widget/ListAdapter;->getItem(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/view/MenuItem;

    invoke-virtual {p0}, Landroidx/appcompat/view/menu/f;->n()Z

    move-result p3

    if-eqz p3, :cond_0

    const/4 p3, 0x0

    goto :goto_0

    :cond_0
    const/4 p3, 0x4

    :goto_0
    invoke-virtual {p2, p1, p0, p3}, Landroidx/appcompat/view/menu/d;->I(Landroid/view/MenuItem;Landroidx/appcompat/view/menu/h;I)Z

    return-void
.end method

.method public abstract q(Landroid/view/View;)V
.end method

.method public r(Landroid/graphics/Rect;)V
    .locals 0

    iput-object p1, p0, Landroidx/appcompat/view/menu/f;->b:Landroid/graphics/Rect;

    return-void
.end method

.method public abstract s(Z)V
.end method

.method public abstract t(I)V
.end method

.method public abstract u(I)V
.end method

.method public abstract v(Landroid/widget/PopupWindow$OnDismissListener;)V
.end method

.method public abstract w(Z)V
.end method

.method public abstract x(I)V
.end method
