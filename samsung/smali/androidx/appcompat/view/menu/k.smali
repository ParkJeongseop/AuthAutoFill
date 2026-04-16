.class public Landroidx/appcompat/view/menu/k;
.super Landroidx/appcompat/view/menu/d;
.source "SourceFile"

# interfaces
.implements Landroid/view/SubMenu;


# instance fields
.field private B:Landroidx/appcompat/view/menu/d;

.field private C:Landroidx/appcompat/view/menu/e;


# direct methods
.method public constructor <init>(Landroid/content/Context;Landroidx/appcompat/view/menu/d;Landroidx/appcompat/view/menu/e;)V
    .locals 0

    invoke-direct {p0, p1}, Landroidx/appcompat/view/menu/d;-><init>(Landroid/content/Context;)V

    iput-object p2, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    iput-object p3, p0, Landroidx/appcompat/view/menu/k;->C:Landroidx/appcompat/view/menu/e;

    return-void
.end method


# virtual methods
.method public B()Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/d;->B()Z

    move-result v0

    return v0
.end method

.method public C()Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/d;->C()Z

    move-result v0

    return v0
.end method

.method public D()Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/d;->D()Z

    move-result v0

    return v0
.end method

.method public L(Landroidx/appcompat/view/menu/d$a;)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0, p1}, Landroidx/appcompat/view/menu/d;->L(Landroidx/appcompat/view/menu/d$a;)V

    return-void
.end method

.method public W()Landroid/view/Menu;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    return-object v0
.end method

.method public e(Landroidx/appcompat/view/menu/e;)Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0, p1}, Landroidx/appcompat/view/menu/d;->e(Landroidx/appcompat/view/menu/e;)Z

    move-result p1

    return p1
.end method

.method g(Landroidx/appcompat/view/menu/d;Landroid/view/MenuItem;)Z
    .locals 1

    invoke-super {p0, p1, p2}, Landroidx/appcompat/view/menu/d;->g(Landroidx/appcompat/view/menu/d;Landroid/view/MenuItem;)Z

    move-result v0

    if-nez v0, :cond_1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0, p1, p2}, Landroidx/appcompat/view/menu/d;->g(Landroidx/appcompat/view/menu/d;Landroid/view/MenuItem;)Z

    move-result p1

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p1, 0x1

    :goto_1
    return p1
.end method

.method public getItem()Landroid/view/MenuItem;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->C:Landroidx/appcompat/view/menu/e;

    return-object v0
.end method

.method public j(Landroidx/appcompat/view/menu/e;)Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0, p1}, Landroidx/appcompat/view/menu/d;->j(Landroidx/appcompat/view/menu/e;)Z

    move-result p1

    return p1
.end method

.method public setGroupDividerEnabled(Z)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0, p1}, Landroidx/appcompat/view/menu/d;->setGroupDividerEnabled(Z)V

    return-void
.end method

.method public setHeaderIcon(I)Landroid/view/SubMenu;
    .locals 0

    invoke-super {p0, p1}, Landroidx/appcompat/view/menu/d;->N(I)Landroidx/appcompat/view/menu/d;

    move-result-object p1

    check-cast p1, Landroid/view/SubMenu;

    return-object p1
.end method

.method public setHeaderIcon(Landroid/graphics/drawable/Drawable;)Landroid/view/SubMenu;
    .locals 0

    invoke-super {p0, p1}, Landroidx/appcompat/view/menu/d;->O(Landroid/graphics/drawable/Drawable;)Landroidx/appcompat/view/menu/d;

    move-result-object p1

    check-cast p1, Landroid/view/SubMenu;

    return-object p1
.end method

.method public setHeaderTitle(I)Landroid/view/SubMenu;
    .locals 0

    invoke-super {p0, p1}, Landroidx/appcompat/view/menu/d;->Q(I)Landroidx/appcompat/view/menu/d;

    move-result-object p1

    check-cast p1, Landroid/view/SubMenu;

    return-object p1
.end method

.method public setHeaderTitle(Ljava/lang/CharSequence;)Landroid/view/SubMenu;
    .locals 0

    invoke-super {p0, p1}, Landroidx/appcompat/view/menu/d;->R(Ljava/lang/CharSequence;)Landroidx/appcompat/view/menu/d;

    move-result-object p1

    check-cast p1, Landroid/view/SubMenu;

    return-object p1
.end method

.method public setHeaderView(Landroid/view/View;)Landroid/view/SubMenu;
    .locals 0

    invoke-super {p0, p1}, Landroidx/appcompat/view/menu/d;->S(Landroid/view/View;)Landroidx/appcompat/view/menu/d;

    move-result-object p1

    check-cast p1, Landroid/view/SubMenu;

    return-object p1
.end method

.method public setIcon(I)Landroid/view/SubMenu;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->C:Landroidx/appcompat/view/menu/e;

    invoke-virtual {v0, p1}, Landroidx/appcompat/view/menu/e;->setIcon(I)Landroid/view/MenuItem;

    return-object p0
.end method

.method public setIcon(Landroid/graphics/drawable/Drawable;)Landroid/view/SubMenu;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->C:Landroidx/appcompat/view/menu/e;

    invoke-virtual {v0, p1}, Landroidx/appcompat/view/menu/e;->setIcon(Landroid/graphics/drawable/Drawable;)Landroid/view/MenuItem;

    return-object p0
.end method

.method public setQwertyMode(Z)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0, p1}, Landroidx/appcompat/view/menu/d;->setQwertyMode(Z)V

    return-void
.end method

.method public z()Landroidx/appcompat/view/menu/d;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/view/menu/k;->B:Landroidx/appcompat/view/menu/d;

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/d;->z()Landroidx/appcompat/view/menu/d;

    move-result-object v0

    return-object v0
.end method
